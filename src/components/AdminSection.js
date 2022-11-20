import React from 'react';
import { Section, SectionBtnContainer, BtnContainer, TinyLink } from '../styles/components/AdminSection.styles'

const AdminSection = ({ section, id }) => {

  return (
    <Section>
      <SectionBtnContainer>
        <h2>{section.title}</h2>
        <BtnContainer>
          <TinyLink to={`/admin/section/${id}`}>details</TinyLink>
        </BtnContainer>
      </SectionBtnContainer>
    </Section>
  )
}

export default AdminSection