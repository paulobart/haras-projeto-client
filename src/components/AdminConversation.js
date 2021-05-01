import React, { Component } from 'react';
import apiUtils from '../api/api.utils';
import sponsorImg from '../assets/sponsor.jpg';
import adminImg from '../assets/admin.jpg';
import { Events, animateScroll as scroll } from 'react-scroll';
import MensagemAdm from './MensagemAdm';


class AdminConversation extends Component {
	constructor(props) {
		super(props);
		//this.scrollToTop = this.scrollToTop.bind(this);
		this.state = {
			sponsors: [],
			sponsor: '',
			check: false,
			id:"",
      message: [],
			
		};
	}

	componentDidMount = () => {
		this.getSponsor();
    this.loadState();
	};
  
	getSponsor = async () => {
		try {
			console.log('getsponsor');
			const sponsorDB = await apiUtils.listSponsor();
			console.log(sponsorDB);
			this.setState({
				sponsors: sponsorDB,
			});
		} catch (error) {
			console.error(error);
		}
	};
  loadState = async ()=>{
    try {
      this.setState({
        sponsor: this.state.sponsors[0],
        check: true,
        id: this.state.sponsors[0]._id,
      });
    } catch (error) {
      
    }
  }
  
	getSponsorEdit = (index) => {
  this.setState({
			sponsor: this.state.sponsors[index],
			check: true,
			id: this.state.sponsors[index]._id,
		});
    this.getInfo();

	};
  getInfo = async () => {
    
    try {
      console.log(this.state.sponsor._id);
      const messageProfile = await apiUtils.getMessage(this.state.sponsor._id);
      const copyMessageProfile = messageProfile.message_id;
      this.setState({
        message: copyMessageProfile,
      });
    
    } catch (error) {
      console.error(error);
    }
  };

	render() {
		return (

			<div className="geral box container is-fullhd ml-6 mt-6" >
        <div className="2 paineis columns">
				<div className="box info-admin is-flex column mt-4">
					<div className="box info-admin column"style={{marginTop: -12}}>
						<div className="foto-admin ">
							<div className="imagem-header">
								<figure className="image is-128x128">
									<img src={this.props.user.imageUrl} alt="imagem" />
								</figure>
							</div>
						</div>
						<div className="dados-admin"></div>
						<p className="card-header card-header-title is-size-4 has-text-info"> Nome: {this.props.user.name}</p>
						<p className="card-header card-header-title is-size-6 has-text-info"> E-mail: {this.props.user.email} </p>
						<p className="card-header card-header-title is-size-6 has-text-info"> Telefone: {this.props.user.phone}</p>
					</div>
          
					<div className="painel column is-8 is-flex is-flex-direction-column">
            <div className="lista sponsor">
						<div className="box  is-align-content-flex-start">
							<div>
								<p className="card-header-title is-size-12 has-text-info">Ver Conversa</p>
							</div>

							{this.state.sponsors.map((sponsor, index) => {
								return (
									<label key={sponsor._id} className="radio panel-block control ml-2">
										<input
											type="radio"
											name="sponsor"
											onChange={() => this.getSponsorEdit(index)}
										/>
										<span className="has-text-info has-text-weight-semibold ml-3">
											{' '}
											{sponsor.name}{' '}
										</span>
									</label>
								);
							})}
						</div>
					</div>
          <div className="mensagem">
          <MensagemAdm user={this.state.sponsor} messagem={this.state.message} getInfo={this.getInfo} />
          </div>
          </div>
				</div>
			</div>
      </div>
		);
	}
}

export default AdminConversation;
