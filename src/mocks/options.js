export default {
    "schedules": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "teacher",
            "type": "ENUM",
            "data": "teachers",
            "nullable": true

        }, {"name": "discipline", "type": "ENUM", "data": "disciplines", "nullable": true}, {
            "name": "dayOfWeek",
            "type": "weekDays",
            "data": null,
            "nullable": true
        }, {"name": "time", "type": "ENUM", "data": "startsTime", "nullable": true}, {
            "name": "classroom",
            "type": "String",
            "data": null,
            "nullable": true
        }, {"name": "group", "type": "ENUM", "data": "groups", "nullable": true}],
    "disciplines": [{"name": "name", "type": "String", "data": null, "nullable": false}],
    "groups": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "department",
            "type": "ENUM",
            "data": "departments",
            "nullable": true
        }, {"name": "course", "type": "String", "data": null, "nullable": true}],
    "students": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "group",
            "type": "ENUM",
            "data": "groups",
            "nullable": true
        }, {"name": "email", "type": "String", "data": null, "nullable": false}, {
            "name": "phone",
            "type": "String",
            "data": null,
            "nullable": false
        }],
    "teachers": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "surname",
            "type": "String",
            "data": null,
            "nullable": false
        }, {"name": "email", "type": "String", "data": null, "nullable": false}, {
            "name": "phone",
            "type": "String",
            "data": null,
            "nullable": false
        }],
    "departments": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "shortName",
            "type": "String",
            "data": null,
            "nullable": false
        }, {"name": "faculty", "type": "ENUM", "data": "faculties", "nullable": true}],
    "news": [
        {"name": "title", "type": "String", "data": null, "nullable": false}, {
            "name": "description",
            "type": "String",
            "data": null,
            "nullable": false
        }, {"name": "text", "type": "Text", "data": null, "nullable": false}, {
            "name": "dateCreated",
            "type": "DateValue",
            "data": null,
            "nullable": true
        }, {"name": "headerImg", "type": "File", "data": null, "nullable": false}],
    "faculties": [
        {"name": "name", "type": "String", "data": null, "nullable": false}, {
            "name": "shortName",
            "type": "String",
            "data": null,
            "nullable": false
        }]
}