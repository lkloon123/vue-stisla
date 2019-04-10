export default {
    computed: {
        hasHeader() {
            return !!this.$slots['header'];
        }
    }
}