import PropTypes from 'prop-types'
import Button from './Button'




const Header = ({ title, onAdd, showAdd }) => {

    const onClick = () => {
        console.log('CLK')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? '-' : '+'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tasker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header
