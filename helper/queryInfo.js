module.exports = {
    queryInfoUser: (query = {}) => {
        const {
            limit = 20, page = 1, sortBy = 'createdAt', order = 'asc', ...filter
        } = query;
        const skip = (page - 1) * limit;
        const keys = Object.keys(filter);
        const filterObject = {};

        const orderBy = order === 'asc' ? -1 : 1;
        const sort = { [sortBy]: orderBy };

        return {
            skip,
            keys,
            filterObject,
            sort,
            limit,
            page,
            filter
        };
    }
};
