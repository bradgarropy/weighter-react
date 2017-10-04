// react
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// components
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';


class LoginForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();
        this.props.submit(this.state);

    }

    onChange(event) {

        this.setState({ [event.target.name]: event.target.value });

    }

    render() {

        return (

            <form onSubmit={this.onSubmit}>

                <EmailInput
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

                <div className="pull-right">
                    <Link to="/forgot">Forgot Password?</Link>
                </div>

            </form>

        );

    }

}


LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
};


LoginForm.defaultProps = {

};


export default LoginForm;
