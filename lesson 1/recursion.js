// Типы полей в форме. Очень полезно выносить повторяющиеся
// данные в справочники.
const fieldTypes = {
    text: 'textField',
    fieldSet: 'fieldSet',
};
// Тестовый объект полей формы, который может быть получен от
// сервера (Backend).
const formData = [
    {
        fieldName: "First name",
        required: true,
        type: fieldTypes.text,
    },
    {
        fieldName: "Last name",
        required: false,
        type: fieldTypes.text,
    },
    {
        fieldName: "Address",
        required: true,
        type: fieldTypes.fieldSet,
        fields: [
            {
                fieldName: "State - Province",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "Street",
                required: true,
                type: fieldTypes.text,
            },
            {
                fieldName: "House",
                required: true,
                type: fieldTypes.text,
            },
        ]
    },
];
// Наша функция, которая должна на основе этих данных построить
// HTML-форму.
const getForm = (formStructure) => {
    // Всегда проверяйте данные, которые к вам пришли.
    if (!Array.isArray(formStructure)) return 'Wrong form structure';
    let form = ''; // Это очень грубый пример. Мы будем создавать
    // форму просто как текст, а в реальности в этой переменной должны
    // быть узлы DOM или компоненты фреймворка (например, React.js).
    formStructure.forEach((element, index) => {
        // Если поле текстовое, то мы обработаем его сразу.
        if (element.type === fieldTypes.text) {
            form = form +
                `<div class="field-wrapper">
<label>${element.fieldName}</label>${element.required ?
                    '<span class="required">*</span>' : ""}
<input type="text">
</div>`;
        }
        // Если это набор полей, то мы вызовем нашу функцию
        // рекурсивно для вложенного набора полей.
        if (element.type === fieldTypes.fieldSet) {
            form = form + `<div
class="fieldset">${getForm(element.fields)}</div>`;
        }
    });
    return form;
}
const result = getForm(formData);
console.log(result);