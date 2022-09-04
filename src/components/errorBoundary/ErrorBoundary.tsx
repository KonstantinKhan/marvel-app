import React, {Component, ReactNode} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

interface Props {
    children?: ReactNode
}

interface State {
    error: boolean
}

class ErrorBoundary extends Component<Props, State> {
    state = {
        error: false
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children
    }
}

export default ErrorBoundary