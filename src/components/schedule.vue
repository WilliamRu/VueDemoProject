<template>
    <div class="schedule__container">
        <div class="schedule__head">
            <div class="schedule__time">
                Время
            </div>
            <div class="schedule__name">
                Название курса
            </div>
            <div class="schedule__classroom">
                Аудитория
            </div>
        </div>
        <div class="schedule__body">
            <div v-for="item in schedule" :key="item.id" class="schedule__row">
                <div class="schedule__time">
                    {{item.time}}
                </div>
                <div class="schedule__name">
                    {{item.name}}
                </div>
                <div class="schedule__classroom">
                    {{item.classroom}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "schedule",
        data: ()=> {
            return {

            }
        },
        computed: {
            schedule () {
                return this.$store.getters.filterSchedule;
            },
        },
    }
</script>

<style lang="scss" scoped>
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
        &__time {
            display: flex;
            flex: 1 1 200px
        }
        &__name {
            display: flex;
            flex: 1 1 650px
        }
        &__classroom {
            display: flex;
            flex: 1 1 150px
        }
    }
</style>