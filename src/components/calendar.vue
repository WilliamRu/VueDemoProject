<template>
    <div class="container">
        <div class="tabs">
            <div v-for="item in tabs" :key="item.id" class="tabs__item" :class="{active : item.active}" @click="changeTabs($event,item.id)">
                {{item.title}}
                {{item.id}}
            </div>
        </div>
        <div class="info">
            <div class="info__calendar">
                <functional-calendar
                        :class="calendarStyle"
                        :apply-stylesheet="false"
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
        <hr>
        Расписание есть на 20.06 и на 20.07
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
                },
                calendarStyle: 'calendarStyle'
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
                this.$store.dispatch('changeTabsActive', tabsID);
            },
            changeData() {
                let dataSelected = this.calendarData.selectedDate;
                this.$store.dispatch('changeData', dataSelected)
            },
        }
    }
</script>

<style lang="scss" scoped>
    /deep/.calendarStyle {
        width: 100%;
        height: 100%;
        @import "../assets/scss/calendarStyle.scss";
    }
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
        flex: 0 0 340px;
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