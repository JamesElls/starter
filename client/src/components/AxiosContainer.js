import React from 'react'

{/* <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading Users'}> */}

const AxiosContainer = () => {
    const { fullError, loading, error, loaderMessage, children } = props
    if (loading) return <Loader content={loaderMessage} />
    if (error) return <ErrorMessage error={error}  fullError={fullError} />


    return (
        <div>
            {children}
        </div>
    )
}

export default AxiosContainer
