import * as React from 'react'
import { v4 } from 'uuid'

import { PluginState, StateActionType } from '../editor-provider/reducer'
import { EditorContext } from '..'

export interface DocumentProps {
  initialState?: PluginState
  defaultPlugin?: string
  state: DocumentIdentifier | SerializedDocument
}

export interface DocumentIdentifier {
  $$typeof: '@edtr-io/document'
  id: string
}

export interface SerializedDocument {
  type: '@edtr-io/document'
  state: PluginState
}

const isDocumentIdentifier = (
  state: DocumentIdentifier | SerializedDocument
): state is DocumentIdentifier => {
  return typeof (state as DocumentIdentifier).$$typeof !== 'undefined'
}

export const Document: React.FunctionComponent<DocumentProps> = props => {
  const { state, dispatch, registry } = React.useContext(EditorContext)

  React.useEffect(() => {
    if (isDocumentIdentifier(props.state) && !state[props.state.id]) {
      dispatch({
        type: StateActionType.Insert,
        payload: {
          id: props.state.id,
          type: props.defaultPlugin
        }
      })
    }
  }, [props.state])

  if (isDocumentIdentifier(props.state)) {
    const { id } = props.state
    if (!state[id]) {
      return null
    }
    const plugin = registry.getPlugin(state[id].type)

    if (!plugin) {
      // TODO:
      // eslint-disable-next-line no-console
      console.log('plugin not existing')
      return null
    }

    const Comp = plugin.Component
    return (
      // @ts-ignore
      <Comp
        state={state[id].state}
        // @ts-ignore
        onChange={change => {
          dispatch({
            type: StateActionType.Change,
            payload: {
              id,
              state: change
            }
          })
        }}
      />
    )
  }

  return null
}

export const createDocumentIdentifier = (): DocumentIdentifier => {
  return {
    $$typeof: '@edtr-io/document',
    id: v4()
  }
}