class ProjectsController < ApplicationController
  def index
  end

  def success_email
    render "success"
  end

  def error_email
    render "error"
  end
end
