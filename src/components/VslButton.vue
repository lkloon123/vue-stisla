<template>
    <button type="button" class="btn" :class="styleClass">
        <slot></slot>
    </button>
</template>

<script>
    const ButtonTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
    const SizeKey = ['small', 'normal', 'large'];

    export default {
        props: {
            type: {
                type: String,
                default: 'primary',
                validator: (value) => ButtonTypes.includes(value)
            },
            size: {
                type: String,
                default: 'normal',
                validator: (value) => SizeKey.includes(value)
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            showProgress: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            styleClass() {
                return {
                    'btn-primary': this.type === 'primary',
                    'btn-secondary': this.type === 'secondary',
                    'btn-success': this.type === 'success',
                    'btn-danger': this.type === 'danger',
                    'btn-warning': this.type === 'warning',
                    'btn-info': this.type === 'info',
                    'btn-light': this.type === 'light',
                    'btn-dark': this.type === 'dark',
                    'btn-link': this.type === 'link',
                    'btn-progress': this.showProgress,
                    'disabled': this.isDisabled,
                    'btn-sm': this.size === 'small',
                    'btn-lg': this.size === 'large'
                }
            },
            hasIcon() {
                return this.icon !== null;
            }
        }
    }
</script>

<style scoped>

</style>