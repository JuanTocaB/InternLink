const Response = {
    success: (data: any, message: string) => {
        return {
            success: true,
            status: 200,
            data,
            message
        }
        
    },

    error: (message: string, status: number) => {
        return {
            success: false,
            status,
            message
        }

    }

}

export default Response;