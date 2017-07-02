<template lang="pug">
.user-setting
    .card.white
        .row
            form.col.s12
                .input-field.col.l6.s12
                    i.material-icons.prefix account_circle
                    input.validate(type="text", data-length="20", data-error="用户名过长")
                    label 用户名
                .input-field.col.l6.s12
                    i.material-icons.prefix phone
                    input.validate(type="text", data-length="20", data-error="过长")
                    label 电话
                .input-field.col.l6.s12
                    i.material-icons.prefix email
                    input.validate(type="email", data-length="20", data-error="wrong")
                    label 邮箱
                .input-field.col.l6.s12
                    i.material-icons.prefix lock
                    input.validate(type="password", data-length="20", data-error="wrong")
                    label 密码
</template>

<script>
export default {
    data() {
        return {
            userSetting: {
                user_name: '',
                user_pwd: '',
                user_tel: '',
                user_email: ''
            }
        }
    }
}
</script>

<style scoped lang="stylus">
i.material-icons
    color #01579b !important
.input-field
    input[type=text]:focus
    input[type=password]:focus
    input[type=email]:focus
        border-bottom-color #01579b
        & + label
            color #01579b
</style>