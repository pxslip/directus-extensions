import InterfaceComponent from './interface.vue';
export default {
    id: 'ushmm-raw-date',
    name: 'Raw Date with Validation',
    description: 'A text entry field usable with dates. Includes Regex validation',
    icon: 'today',
    component: InterfaceComponent,
    types: ['dateTime', 'date', 'time', 'timestamp'],
    optins: [
        {
            field: 'validationRegex',
            name: 'RegEx for input validation',
            type: 'string',
        },
    ],
};
