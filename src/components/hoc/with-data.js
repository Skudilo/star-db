import React, {useEffect, useState} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry";

const withData = (View, getData) => {
	return (props) => {
		const [data, setData] = useState(null)
		const [error, setError] = useState(false)

		useEffect(() => {
			let cancelled = false
			getData()
				.then((data) => {
					!cancelled && setData(data)
				})
				.catch(() => {
					setError(true)
				})
			return  () => cancelled = true
		},[])

		if (error) {
			return <ErrorIndicator />
		}

		if (!data) {
			return <Spinner />;
		}

		return (
			<ErrorBoundry>
				<View {...props} data={data}/>
			</ErrorBoundry>
		)
	}
}

export default withData;