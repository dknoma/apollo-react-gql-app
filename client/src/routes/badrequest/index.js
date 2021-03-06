import React from 'react'
import Loadable from 'react-loadable'

import Loading from '../../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./badrequest'),
  loading: Loading,
})

const LoadableBadRequest = () => <LoadableComponent />

export default LoadableBadRequest