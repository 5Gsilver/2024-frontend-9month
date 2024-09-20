const USERS_SIGN_UP = 'USERS/SIGN_UP';

const initialState = {
	users: [],
	currentUser: null,
};

function userReducer(state= initialState, action){
	if (action.type === USERS_SIGN_UP){
		const newUser = action.payload;
		const newUsers = [...state.users, newUser];
		return {users: newUsers};
	}
}

export default userReducer;