import React from 'react'
import { connect } from 'react-redux'
import { Creators } from 'modules/users/users-actions'
import * as UserSelectors from 'modules/users/users-selectors'
import { Formik, Form, useField, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { actions } from 'redux-router5'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <div><label htmlFor={props.id || props.name}>{label}</label></div>
      <div><input className='text-input' {...field} {...props} /></div>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}


const mapStateToProps = (state) => ({
  skills: UserSelectors.getSkills(state)
})

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(Creators.addUser(user)),
  navigateToUserList: () => dispatch(actions.navigateTo('users'))
})

export const AddUserForm = connect(mapStateToProps, mapDispatchToProps)(
  ({ skills, addUser, navigateToUserList }) => {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          skills: ""
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().required('Required'),
            lastName: Yup.string().required('Required'),
            skills: Yup.string().oneOf(skills.map((skill) => skill.id), 'Invalid skill').required('Required')
          })
        }
        onSubmit={(values) => {
          console.log(values)
          addUser({...values, skills: [values.skills]}) // TODO skills must be an array
          navigateToUserList()
        }}
      >
        <Form>
          <TextInput
            name='firstName'
            label='First Name'
            type='text'
          />
          <TextInput
            name='lastName'
            label='Last Name'
            type='text'
          />
          <div>
            <label htmlFor="skills">Skills</label>
          </div>
          <div>
            <Field name="skills" as="select" className="skills-select">
              {skills.map((skill) => <option key={skill.id} value={skill.id}>{skill.name}</option>)}
            </Field>
          </div>
          <div>
            <ErrorMessage name="skills" />
            </div>
          <div>
            <button type='submit'>Save</button>
          </div>
        </Form>
      </Formik>
    )
  }
)

