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
            <div v-for="item in schedule" v-bind:key="item.id" class="schedule__row">
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
            datenow () {
                return this.$store.getters.datenow;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .schedule {
        &__container {
            display: flex;
        }
        &__head {
            display: flex;
        }
    }
</style>