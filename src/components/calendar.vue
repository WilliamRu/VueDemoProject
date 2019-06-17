<template>
    <div class="container">
        <div class="tabs">
            <div v-for="item in tabs" class="tabs__item" @click="changeTabs($event,item.id)" data-active>
                {{item.title}}
            </div>
        </div>
        <div class="info">
            <div class="info__calendar">
                <functional-calendar
                        :is-date-picker="true"
                        :date-format="'dd.mm.yyyy'"
                        :day-names="['П', 'В', 'С', 'Ч', 'П', 'С', 'В']"
                        :monthNames="['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']"
                        v-model="calendarData"
                        @input="changeData">
                </functional-calendar>
            </div>
            <schedule></schedule>
        </div>
    </div>
</template>

<script>
    import schedule from '../components/schedule';
    import {FunctionalCalendar} from 'vue-functional-calendar';

    export default {
        name: "calendar",
        components: {
            schedule,
            FunctionalCalendar
        },
        data: () => {
            return {
                attrs: [
                    {
                        key: 'today',
                        highlight: {
                            backgroundColor: '#ff8080',
                            // Other properties are available too, like `height` & `borderRadius`
                        },
                        dates: new Date()
                    }
                ],
                calendarData: {},
                calendarConfigs: {
                    isDatePicker: true,
                    dateFormat: 'dd.mm.yyyy',
                    dayNames: ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'],
                    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
                }
            };
        },
        computed: {
            tabs() {
                return this.$store.state.tabs;
            },
        },
        methods: {
            changeTabs: function (e, tabsID) {
                this.$store.dispatch('changeTabs', tabsID);

                let arr = document.body.querySelectorAll('[data-active]');
                arr.forEach(function (item, i, arr) {
                    item.classList.remove('active')
                });
                if (!(e.target.getAttribute('class').includes('active'))) {
                    e.target.className += ' active'
                }
            },
            changeData() {
                let dataSelected = this.calendarData.selectedDate;
                this.$store.dispatch('changeData', dataSelected)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: block;
        width: 1366px;
        height: 100%;
        margin: 0 auto;
    }

    .info {
        flex: 1 1 100%;
        display: flex;
    }

    .info__calendar {
        width: 300px;
    }

    .tabs {
        display: flex;
        margin-bottom: 20px;

        &:hover {
            cursor: pointer;
        }

        &__item {
            padding: 14px 35px;
            border: 1px solid #e4e4e4;
            margin-right: 10px;

            &.active {
                background: #e4e4e4;
            }
        }
    }
    .calendar-wrap {
        width: 300px;
    }
</style>