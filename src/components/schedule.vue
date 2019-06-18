<template>
    <div class="schedule__container" key="exist">
        <transition name="fade" mode="out-in">
            <div v-if="schedule" class="schedule__table">
                <div class="schedule__head">
                    <div class="schedule__time schedule__cell">
                        Время
                    </div>
                    <div class="schedule__name schedule__cell">
                        Название курса
                    </div>
                    <div class="schedule__classroom schedule__cell">
                        Аудитория
                    </div>
                </div>
                <transition-group
                        class="schedule__body"
                        name="staggered-fade"
                        tag="div"
                        @before-enter="beforeEnter"
                        @enter="enter">
                    <div v-for="(item,index) in schedule" :key="item.id" class="schedule__row" :data-index="index">
                        <div class="schedule__time schedule__cell">
                            {{item.time}}
                        </div>
                        <div class="schedule__name schedule__cell">
                            {{item.name}}
                        </div>
                        <div class="schedule__classroom schedule__cell">
                            {{item.classroom}}
                        </div>
                    </div>
                </transition-group>
            </div>
            <div v-else class="schedule__exists" key="notexist">
                К сожаленю, на это число нет курсов.
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "schedule",
        data: () => {
            return {
                show: false
            }
        },
        computed: {
            schedule() {
                return this.$store.getters.filterSchedule;
            },
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0
            },
            enter: function (el, done) {
                let delay = el.dataset.index * 200;
                setTimeout(function () {
                    Velocity(
                        el,
                        {opacity: 1},
                        {complete: done}
                    )
                }, delay)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
    .schedule {
        &__container {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__head {
            display: flex;
            justify-content: flex-start;
            padding: 20px 25px;
            font-size: 12px;
            color: #999999;
        }

        &__body {
            border: 1px solid #f2f2f2;
        }

        &__row {
            display: flex;
            padding: 20px 25px;

            &:nth-child(2n) {
                background-color: #f2f2f2;
            }
        }

        &__cell {
            display: flex;
            align-items: center;
        }

        &__time {
            flex: 1 1 200px
        }

        &__name {
            flex: 1 1 650px
        }

        &__classroom {
            flex: 1 1 150px
        }

        &__exists {
            display: flex;
            flex: 1 1 100%;
            justify-content: center;
            align-items: center;
            border: 1px solid #f2f2f2;
        }
    }
</style>