function getvalue(id) {
    document.querySelector('ty').addEventListener('change', function () {
        this.setAttribute('value', this.value);
    });
}

export default getvalue;