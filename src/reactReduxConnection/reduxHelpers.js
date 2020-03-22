// constants

/**
 * The action to write new content in the Markdown editor
 * 
 * @constant
 */
const WRITE = "WRITE";

// functions

/**
 * consumes a string and produces an action Object, 
 * with the form {type: String, text: String}
 * 
 * @param {String} text 
 * @returns {Object} the created Action object
 */
const writeMarkdown = function (text) {
    return {
        type: WRITE,
        text,
    }
};

/**
 * consumes a state and an Action object, and then produces
 * a new state
 * 
 * @param {String} state 
 * @param {Object} action an Action object
 * @returns {String} the new state
 */
export const mdReducer = function (state = "", action) {
    const possibleActions = {
        WRITE: function () {
            return `${state}${action.text}`;
        }
    };

    return possibleActions[action] || state;
};

/**
 * consumes a state and returns a Props object
 * 
 * @param {String} state 
 * @returns {Object} the Props object
 */
export const mapStateToProps = function (state) {
    return {
        text: state,
    }
};

/**
 * passes in the Action creator to the dispatch function
 * 
 * @param {Function} dispatch 
 * @returns {Object}
 */
export const mapDispatchToProps = function (dispatch) {
    return {
        addNewContent: function (text) {
            dispatch(writeMarkdown(text));
        },
    };
};
