window.JustValidate
document.addEventListener("DOMContentLoaded", function(){
    const validator = new JustValidate(".footer-form",{
        validateBeforeSubmitting: true,
    });
    validator.addField('#async_email', [
    {
        rule: 'required',
    },
    {
        validator: (value) => () =>
        new Promise((resolve) => {
            setTimeout(() => {
            resolve(false);
            }, 1000);
        }),
        errorMessage: 'Email already exists!',
    },
    ]);


    // ! Механизировать создание статей
})