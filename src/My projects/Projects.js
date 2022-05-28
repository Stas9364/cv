import React from 'react';
import styles from './Projects.module.css';
import style from '../ConteinerStyle/Container.module.css';
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${style.container} ${styles.projectsWrapper}`}>
                <h2 className={styles.title}>My projects</h2>
                <div className={styles.projectsContainer}>
                    <Project
                        projectName={'TODOLIST'}
                        description={'ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publi'}
                    />
                    <Project
                        projectName={'Social network'}
                        description={' page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look lik'}
                    />
                    <Project
                        projectName={'Counter'}
                        description={'till in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (inject'}
                    /><Project
                        projectName={'Counter'}
                        description={'till in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (inject'}
                    /><Project
                        projectName={'Counter'}
                        description={'till in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (inject'}
                    />
                </div>
            </div>
        </div>
    );
};

