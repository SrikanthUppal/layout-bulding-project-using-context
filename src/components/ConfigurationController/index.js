// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-control-container">
          <div className="responsive-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-controls">
              <input
                value={showContent}
                onChange={onChangeContent}
                type="checkbox"
                id="content"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="checkbox-controls">
              <input
                value={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                type="checkbox"
                id="leftNavBar"
              />
              <label className="label" htmlFor="leftNavBar">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-controls">
              <input
                value={showRightNavbar}
                onChange={onChangeRightNavbar}
                type="checkbox"
                id="rightNavBar"
              />
              <label className="label" htmlFor="rightNavBar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
