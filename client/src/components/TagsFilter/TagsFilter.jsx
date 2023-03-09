import './TagsFilter.scss';

const TagsFilter = (props) => {



    return (
        <div className={props.filter === '🔥 All' ? 'filter-active tag-filter-container' : 'tag-filter-container'}>
            <p>{props.filter}</p>
        </div>
    )
}

export default TagsFilter;