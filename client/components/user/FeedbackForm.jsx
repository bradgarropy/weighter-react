// react
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import EmailInput from '../common/EmailInput';
import TextArea from '../common/TextArea';

// api
import feedback from '../../api/feedback';


class FeedbackForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            feedback: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {

        event.preventDefault();

        feedback(this.state).then(
            (response) => {

                console.log(response);
                this.props.history.push('/');

            },
        );

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

                <TextArea
                    label="Feedback"
                    name="feedback"
                    placeholder="Tell us what you think!"
                    rows={8}
                    value={this.state.feedback}
                    onChange={this.onChange}
                />

                <button className="btn btn-default" type="submit">Submit</button>

            </form>

        );

    }

}


FeedbackForm.propTypes = {

};


FeedbackForm.defaultProps = {

};


export default withRouter(FeedbackForm);