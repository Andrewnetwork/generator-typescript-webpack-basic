'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(`Welcome to ${chalk.green('typescript-webpack-basic')}!`);
    this.log(`Setting up your project now.`);

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: "my-typescript-project"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
          name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('config_files'),
      this.destinationPath('./')
    );
    this.fs.copy(
      this.templatePath('default_dist'),
      this.destinationPath('dist')
    );
    this.fs.copy(
      this.templatePath('default_src'),
      this.destinationPath('src')
    );
  }

  install() {
    this.installDependencies({bower:false,npm:true});
  }
};
