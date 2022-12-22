export const productValidation = (name, value) => {
	const regex = /^(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}$/gi;
	if (name === 'price') {
		return Number.isInteger(+value);
	} else if (name === 'link') {
		return regex.test(value);
	}
};
