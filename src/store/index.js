import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        schedule: [
            {
                id: 1,
                tabsId: 1,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000) 1',
                classroom: '403'
            },
            {
                id: 2,
                tabsId: 1,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000) 1',
                classroom: '403'
            },
            {
                id: 3,
                tabsId: 1,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000) 1',
                classroom: '403'
            },
            {
                id: 4,
                tabsId: 1,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000) 1',
                classroom: '403'
            },
            {
                id: 5,
                tabsId: 2,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000) 2',
                classroom: '403'
            },
            {
                id: 6,
                tabsId: 2,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 7,
                tabsId: 2,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 8,
                tabsId: 2,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 9,
                tabsId: 3,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 10,
                tabsId: 3,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
        ],
        tabs: [
            {id: 1, title: 'Калинина 18'},
            {id: 2, title: 'Казакова 11/1'},
            {id: 3, title: 'Прочие площадки'},
        ],
        tabsActive: 1,
        dateActive: '',
     },
    getters: {
        filterSchedule: state => {
            return state.schedule.filter(schedule => ((schedule.tabsId == state.tabsActive) && (schedule.date == state.dateActive)))
        },
    },
    actions: {
        changeTabs({commit}, id) {
            commit('CHANGE_TABS', id);
        },
        changeData({commit}, date) {
            commit('CHANGE_DATA', date);
        }
    },
    mutations: {
        CHANGE_TABS: (state,id) =>
            state.tabsActive = id,
        CHANGE_DATA: (state,date) =>
            state.dateActive = date
    },
});