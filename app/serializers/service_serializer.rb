class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :parsed_time

  def parsed_time
    object.time.strftime('%I:%M %p')
          .sub('AM', 'a.m.') # sub out AM for a.m
          .sub('PM', 'p.m.')
          .gsub(/^0/, '') # gets rid of leading 0
  end
end
