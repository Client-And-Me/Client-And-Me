import React, { Component } from "react";
import "./ProviderClients.css";
import LoadingGif from "../../components/LoadingGif";
import { Row, Section } from "react-materialize";
import ProviderClientsCollapsibleMain from "../../components/ProviderClientsCollapsibleMain";
import moment from "moment"
import API from "../../utils/API";

const date = moment().format()


class ProviderClients extends Component {
    state = {
        isLoading: true,
        clients: null
    };

    providerClientsInfo = () => {
        console.log("getting appts");
        // console.log(this.props.user.uid)
        API.providerClientsInfo(localStorage.getItem("fid"), date).then(res =>
            this.setState({
                clients: res.data,
                isLoading: false,
            }),
        ).catch(err => 
            this.setState({
            //clients: res.data,
            isLoading: false,
        }),);

        console.log(this.props.user);
        console.log(this.state.clients);
        console.log("got appts");

        //console.log(auth.currentUser().uid)
    };

    componentDidMount() {
        console.log("mounting");
        this.providerClientsInfo();
        console.log("mounted")
    }

    render() {
        if (!this.state.isLoading) {
            return (
                <div>
                    <Section className="customContainer">
                        <Row>
                            <ProviderClientsCollapsibleMain />
                        </Row>

                    </Section>
                </div>
            );
        } else {
            return (<div> <LoadingGif /></div>)
        }
    }
}

export default ProviderClients;