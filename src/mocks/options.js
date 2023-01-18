export default {
    "schedules": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "teacher",
            "inputType": "data",
            "dataSource": "teachers",
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "discipline",
            "inputType": "data",
            "dataSource": "disciplines",
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "dayOfWeek",
            "inputType": "selectWeekDays",
            "dataSource": null,
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "time",
            "inputType": "data",
            "dataSource": "startsTime",
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "classroom",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textNumberDashValidator",
            "nullable": true
        },
        {
            "name": "group",
            "inputType": "data",
            "dataSource": "groups",
            "validatorName": null,
            "nullable": true
        }
    ],
    "disciplines": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        }
    ],
    "groups": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "department",
            "inputType": "data",
            "dataSource": "departments",
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "course",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "courseValidator",
            "nullable": true
        }
    ],
    "students": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "group",
            "inputType": "data",
            "dataSource": "groups",
            "validatorName": null,
            "nullable": true
        },
        {
            "name": "email",
            "inputType": "email",
            "dataSource": null,
            "validatorName": "emailValidator",
            "nullable": false
        },
        {
            "name": "phone",
            "inputType": "phone",
            "dataSource": null,
            "validatorName": "phoneValidator",
            "nullable": false
        }
    ],
    "teachers": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "surname",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "email",
            "inputType": "email",
            "dataSource": null,
            "validatorName": "emailValidator",
            "nullable": false
        },
        {
            "name": "phone",
            "inputType": "phone",
            "dataSource": null,
            "validatorName": "phoneValidator",
            "nullable": false
        }
    ],
    "departments": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "shortName",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textNumberValidator",
            "nullable": false
        },
        {
            "name": "faculty",
            "inputType": "data",
            "dataSource": "faculties",
            "validatorName": null,
            "nullable": true
        }
    ],
    "news": [
        {
            "name": "title",
            "inputType": "text",
            "dataSource": null,
            "validatorName": null,
            "nullable": false
        },
        {
            "name": "description",
            "inputType": "textarea",
            "dataSource": null,
            "validatorName": null,
            "nullable": false
        },
        {
            "name": "text",
            "inputType": "textarea",
            "dataSource": null,
            "validatorName": null,
            "nullable": false
        },
        {
            "name": "dateCreated",
            "inputType": "date",
            "dataSource": null,
            "validatorName": "dateValidator",
            "nullable": true
        }
    ],
    "faculties": [
        {
            "name": "name",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        },
        {
            "name": "shortName",
            "inputType": "text",
            "dataSource": null,
            "validatorName": "textOnly",
            "nullable": false
        }
    ]
}