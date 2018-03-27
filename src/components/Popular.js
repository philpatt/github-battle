import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchPopularRepos from '../utils/api';



function SelectedLanguage (props){
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    console.log(props);
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
        fetchPopularRepos(this.state.selectedLanguage)
        .then(function(repos){
            console.log(repos)
        })
    }

    updateLanguage(lang){
        this.setState({
            selectedLanguage: lang
        });
    }

    render(){
        return(
            <div>
                <SelectedLanguage 
                selectedLanguage = {this.state.selectedLanguage}
                onSelect = {this.updateLanguage}
                />
            </div>
        )
    }
}

