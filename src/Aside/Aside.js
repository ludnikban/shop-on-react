import React from "react";

class Aside extends React.Component {
    render() {
        return (
          <aside className="col-lg-3 order-lg-1 sidebar">

                        <div className="container-fluid sidebar-filter">

                            <form>
                                <fieldset className="form-group">
                                    <legend>Device type</legend>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt1" id="opt1"
                                               value="opt1"/>
                                        checked>
                                        <label className="form-check-label" htmlFor="opt1">
                                            Laptop
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt2" id="opt2"
                                               value="opt2"/>
                                        <label className="form-check-label" htmlFor="opt2">
                                            Tablet
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="form-group">
                                    <legend>Color</legend>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt3" id="opt3"
                                               value="opt3"/>
                                        checked>
                                        <label className="form-check-label" htmlFor="opt3">
                                            Black
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt4" id="opt4"
                                               value="opt4"/>
                                        <label className="form-check-label" htmlFor="opt4">
                                            Red
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt5" id="opt5"
                                               value="opt5"/>
                                        <label className="form-check-label" htmlFor="opt5">
                                            Green
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt6" id="opt6"
                                               value="opt6"/>
                                        <label className="form-check-label" htmlFor="opt6">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt7" id="opt7"
                                               value="opt7"/>
                                        <label className="form-check-label" htmlFor="opt7">
                                            Orange
                                        </label>
                                    </div>
                                </fieldset>

                                <fieldset className="form-group">
                                    <legend>RAM</legend>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt8" id="opt8"
                                               value="opt8"/>
                                        checked>
                                        <label className="form-check-label" htmlFor="opt8">
                                            1GB
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt9" id="opt9"
                                               value="opt9"/>
                                        <label className="form-check-label" htmlFor="opt9">
                                            2GB
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt10" id="opt10"
                                               value="opt10"/>
                                        <label className="form-check-label" htmlFor="opt10">
                                            4GB
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt11" id="opt11"
                                               value="opt11"/>
                                        <label className="form-check-label" htmlFor="opt11">
                                            6GB
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="opt12" id="opt12"
                                               value="opt12"/>
                                        <label className="form-check-label" htmlFor="opt12">
                                            8GB
                                        </label>
                                    </div>
                                </fieldset>

                                <a href="#" className="sidebar-filter__more">Show more options...</a>

                                <button type="submit"
                                        className="btn btn-primary btn-block sidebar-filter__submit">Submit
                                </button>
                            </form>
                        </div>

                    </aside>
        )
    }
}

export default Aside;