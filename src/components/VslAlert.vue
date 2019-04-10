<template>
    <div class="alert" :class="styleClass">
        <div v-if="hasIcon" class="alert-icon" v-html="icon"></div>
        <div class="alert-body">
            <button class="close" data-dismiss="alert" v-if="dismissible">
                <span googl="true">×</span>
            </button>
            <div v-if="hasHeader" class="alert-title">
                <slot name="header"></slot>
            </div>
            <slot name="body"></slot>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Mixin from './mixin';

    const AlertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    export default {
        mixins: [Mixin],
        name: 'vsl-alert',
        props: {
            type: {
                type: String,
                default: 'primary',
                validator: (value) => AlertTypes.includes(value)
            },
            icon: {
                default: null
            },
            dismissible: {
                default: false
            }
        },
        computed: {
            styleClass() {
                return {
                    'alert-primary': this.type === 'primary',
                    'alert-secondary': this.type === 'secondary',
                    'alert-success': this.type === 'success',
                    'alert-danger': this.type === 'danger',
                    'alert-warning': this.type === 'warning',
                    'alert-info': this.type === 'info',
                    'alert-light': this.type === 'light',
                    'alert-dark': this.type === 'dark',
                    'alert-has-icon': this.hasIcon,
                    'alert-dismissible': this.dismissible,
                    'show': this.dismissible,
                    'fade': this.dismissible
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