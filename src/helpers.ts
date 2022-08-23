export const getInteger = (text: string) => text.replace(/[^\d]/g, '');

export const setNumberLimit = (value: string, limit = 4) =>
    value.substring(0, limit);
