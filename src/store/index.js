import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        schedule: [
            {
                id: 0,
                tabsId: 0,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность 20.6.2019 Калинина 18 1',
                classroom: '403'
            },
            {
                id: 1,
                tabsId: 0,
                date: '20.6.2019',
                time: '08:00 - 09:31',
                name: 'Информационная безопасность 20.6.2019 Калинина 18 2',
                classroom: '403'
            },
            {
                id: 2,
                tabsId: 0,
                date: '20.6.2019',
                time: '08:00 - 09:32',
                name: 'Информационная безопасность 20.6.2019 Калинина 18 3',
                classroom: '403'
            },
            {
                id: 3,
                tabsId: 0,
                date: '21.6.2019',
                time: '08:00 - 09:33',
                name: 'Информационная безопасность 21.6.2019 Калинина 18 1',
                classroom: '403'
            },
            {
                id: 4,
                tabsId: 0,
                date: '21.6.2019',
                time: '08:00 - 09:34',
                name: 'Информационная безопасность 21.6.2019 Калинина 18 2',
                classroom: '403'
            },
            {
                id: 5,
                tabsId: 1,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность 20.6.2019 Казакова 11/1 1',
                classroom: '403'
            },
            {
                id: 6,
                tabsId: 1,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность  20.6.2019 Казакова 11/1 2',
                classroom: '403'
            },
            {
                id: 7,
                tabsId: 1,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 8,
                tabsId: 1,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 9,
                tabsId: 1,
                date: '20.7.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 10,
                tabsId: 2,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
            {
                id: 11,
                tabsId: 2,
                date: '20.6.2019',
                time: '08:00 - 09:30',
                name: 'Информационная безопасность (в соответствии с МС ИСО серии 17799:2000)',
                classroom: '403'
            },
        ],
        tabs: [
            {id: 0, title: 'Калинина 18', active: true},
            {id: 1, title: 'Казакова 11/1', active: false},
            {id: 2, title: 'Прочие площадки', active: false},
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
        changeTabsActive({commit}, id) {
            commit('CHANGE_TABS_ACTIVE', id);
        },
        changeData({commit}, date) {
            commit('CHANGE_DATA', date);
        }
    },
    mutations: {
        CHANGE_TABS: (state, id) =>
            state.tabsActive = id,

        CHANGE_DATA: (state, date) =>
            state.dateActive = date,

        CHANGE_TABS_ACTIVE: (state, id) => {

            state.tabs.forEach(el => {
                el.active = false;
            });
            state.tabs[id].active = true;
        }
    },
});