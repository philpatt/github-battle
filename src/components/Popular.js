import React, { Component } from 'react';
import PropTypes from 'prop-types';
import utils from '../utils/api';
import Loading from './Loading';

function RepoGrid (props){
    return (
        <ul className='popular'>
            {props.repos.map(function(repo, index){
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li>
                                <a href={repo.html_url}>{repo.name}</a>
                            </li>
                            <li>
                                @{repo.owner.login}
                            </li>
                            <li>
                            {repo.stargazers_count} stars
                            </li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

function SelectedLanguage (props){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className='languages'>
            {languages.map( (lang) => {
                return (
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}


SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}


class Popular extends Component{

    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
        };
    this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount () {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang){
        this.setState({
            selectedLanguage: lang,
            repos: null
        });
        utils.fetchPopularRepos(lang)
            .then(function (repos) {
                this.setState({
                    repos: repos
                })
            }.bind(this))
    }

    render(){
        return(
            <div>
                <SelectedLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
                {!this.state.repos ? <Loading text='Downloading' /> : <RepoGrid repos={this.state.repos} />}


            </div>
        )
    }
}


export default Popular;