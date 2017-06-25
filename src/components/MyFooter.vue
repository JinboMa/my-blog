<template lang="pug">
footer.page-footer.light-blue.darken-4
    //.container
        .row
            .col.l6.s12
                h5 Footer Content
                p You can use rows and columns here to organize your footer content.
            .col.l4.offset-l2.s12
                h5 Links
                ul
                    li
                        a Link1
                        a Link2
                        a Link3
                        a Link4
    .footer-copyright
        .container
            | Copyright © 2017 JinboMa. All Rights Reserved.
</template>

<script>
export default {
    
}
</script>

<style scoped lang="stylus">
.page-footer
    padding-top 0
	color white
	a
		color white
.footer-copyright
    pointer-events none
    user-select none
</style>