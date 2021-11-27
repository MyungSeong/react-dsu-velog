import userApi from '../api/User';

const SUCCESS = 200;

const user = {
    create: async (UserInfo) => {
        try {
            const { userName, description, id, password } = UserInfo;

            const response = await userApi.create({
                user_nm: userName,
                user_desc: description,
                user_login_id: id,
                user_login_pw: password,
            });

            const { status } = response;

            if (status === SUCCESS) {
                return true;
            }
        } catch (error) {
            console.log(error);

            return false;
        }
    },
    getList: async () => {
        try {
            const response = await userApi.getList();

            const { status } = response;

            if (status === SUCCESS) {
                return true;
            }
        } catch (error) {
            console.log(error);

            return false;
        }
    },
};

export default user;
