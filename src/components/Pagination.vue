<template lang="pug">
ul.pagination
    li(:class="value<=0?['disabled']:['waves-effect']", @click="previous")
        i.material-icons chevron_left
    li.waves-effect(
        v-for="page in showList",
        :key="page.index",
        :class="{active:page.index == value}",
        @click="changeActive(page.index)") {{ page.text }}
    li.waves-effect(:class="value>=pages.length-1?['disabled']:['waves-effect']", @click="next")
        i.material-icons chevron_right
</template>

<script>
export default {
    computed: {
        showList() {
            var max = this.max,
                pages = this.pages,
                first = 0,
                last = pages.length - 1,
                value = this.value,
                left = parseInt(max / 2),
                right = max - left - 1,
                _first = value - left,
                _last = value + right,
                showArr = []
            if (_first < 0) {
                _last += -_first
                _first = 0
            } else if (_last > last) {
                _first -= _last - last
                _last = last
            }
            for (let i = 0; i <= last; i++) {
                if (i >= _first && i <= _last) {
                    showArr.push({
                        index: i,
                        text: pages[i]
                    })
                }
            }
            return showArr
        }
    },
    props: {
        value: {
            type: [Number],
            default: 0
        },
        max: {
            type: [Number],
            default: 5
        },
        pages: {
            type: [Array],
            default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    methods: {
        changeActive(page) {
            this.$emit('input', page)
        },
        previous() {
            this.$emit('input', this.value - 1)
        },
        next() {
            this.$emit('input', this.value + 1)
        }
    }
}
</script>

<style scoped lang="stylus">
.pagination
    margin 20px 0
    li
        margin-right 5px
        padding 0 10px
        line-height 30px
        font-size 1.2rem
        color #444
        &.active
            color white
            background-color #01579b
        &.disabled
            color #999
            cursor not-allowed
            pointer-events none
            user-select none
</style>