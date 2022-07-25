import React from 'react';
import styles from './Projects.module.scss';
import {Project} from './Project/Project';
import {Title} from '../Commons/Title/Title';
import todoPic from '../assets/img/Todo-Logo.png';
import socNet from '../assets/img/network-social.png';

export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todoPic})`};
    const socialNet = {
        backgroundImage: `url(${socNet})`};

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styles.container} ${styles.projectsWrapper}`}>
                   <a name='projects'/>
                    <Title title={'projects'}/>
                <div className={styles.projectsContainer}>
                    <Project
                        projectName={'TODOLIST'}
                        style={todo}
                        description={'ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop '}
                    />
                    <Project
                        projectName={'Social network'}
                        style={socialNet}
                        description={' page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look lik'}
                    />
                    <Project
                        projectName={'Social network'}
                        style={socialNet}
                        description={' page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look lik'}
                    />
                    <Project
                        projectName={'Social network'}
                        style={socialNet}
                        description={' page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look lik'}
                    />
                </div>
            </div>
        </div>
    );
};

