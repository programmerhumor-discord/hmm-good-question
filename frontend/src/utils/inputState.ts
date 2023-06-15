export const inputState = <T>(
	stateFunction: React.Dispatch<React.SetStateAction<T>>
) => {
	return (e: React.ChangeEvent<HTMLInputElement>) => {
		stateFunction(e.target.value as T);
	};
};
