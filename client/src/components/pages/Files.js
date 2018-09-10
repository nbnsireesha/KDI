import React, { Component } from 'react'

export default class Files extends Component {
  render() {
    return (
      <div>
        <h1>you can view files here</h1>
        <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"></input>
            <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
        </div>
        
      </div>
    )
  }
}
