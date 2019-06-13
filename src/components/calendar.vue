<template>
    <div class="container">
        <div class="tabs">
            <div v-for="item in tabs" class="tabs__item" @click="changeTabs(item.id)">
                {{item.title}}
            </div>
        </div>
        <button @click="changeData"></button>
        <div class="info">
            <div class="info__calendar">
                <v-date-picker

                        @input="changeData"
                        mode='single'
                        v-model='selectedDate'
                        show-caps>
                </v-date-picker>
            </div>
            <schedule></schedule>
        </div>
    </div>
</template>

<script>
    import {setupCalendar, Calendar, DatePicker} from 'v-calendar';
    import 'v-calendar/lib/v-calendar.min.css';
    import schedule from '../components/schedule';

    setupCalendar({
        firstDayOfWeek: 2,
        popoverVisibility: "visible",
    });

    export default {
        name: "calendar",
        components: {
            'v-calendar': Calendar,
            'v-date-picker': DatePicker,
            schedule
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
                selectedDate: new Date(),
                /*formats: {
                    title: 'MMMM YYYY',
                    weekdays: 'W',
                    navMonths: 'MMM',
                    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'], // Only for `v-date-picker`
                    dayPopover: 'L', // Only for `v-date-picker`
                }*/
            };
        },
        computed: {
            tabs() {
                return this.$store.state.tabs;
            },
        },
        methods: {
            changeTabs(tabsID) {
                this.$store.dispatch('changeTabs', tabsID)
            },
            changeData() {
                let dataDate = this.selectedDate.getDate().toString();
                let dataMonth = this.selectedDate.getMonth()+1;
                dataMonth.toString();
                let dataYear = this.selectedDate.getFullYear().toString();
                let dataFull = dataDate+'.'+dataMonth+'.'+dataYear;
                this.$store.dispatch('changeData', dataFull)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: block;
        width: 1366px;
        margin: 0 auto;
    }

    .info {
        display: flex;
    }

    .info__calendar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 0 0 300px;
    }

    .tabs {
        display: flex;
    }
    Popover {
        display: none;
    }
</style>