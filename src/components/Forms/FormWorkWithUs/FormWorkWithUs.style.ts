import styled from "styled-components";

export const SFormWorkWithUs = styled.div`
  width: calc(52vw + 117px);

  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;

  .exit {
    position: absolute;
    top: calc(4.1vw + 4.5px);
    right: calc(3.2vw + 8px);
    font-size: calc(0.6vw + 16px);
    cursor: pointer;
    color: #b9bcbb;
  }
  h4 {
    font-weight: 500;
    margin-bottom: calc(0.2vw + 7px);
    text-align: center;
  }
  .description {
    font-size: calc(0.2vw + 15.3px);
    color: rgba(0, 0, 0, 0.5);
    font-family: ${(props) => props.theme.fontFamily.roboto};
    margin-bottom: 40px;
    text-align: center;
  }

  .wrapper {
    display: flex;
    gap: 12px 30px;
    margin-bottom: 30px;
    label {
      width: 49%;
    }
    @media (max-width: 795px) {
      flex-wrap: wrap;
      margin-bottom: 12px;
      label {
        width: 100%;
      }
    }
  }
  .textarea-wrapper {
    font-family: ${(props) => props.theme.fontFamily.roboto};
    margin: 40px 0;
    textarea {
      margin-top: 8px;
      display: block;
      width: 100%;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;
      font-size: ${(props) => props.theme.fontSize.font16$12};
      resize: none;
      border-radius: 12px;
      padding: 16px;
    }
  }
  .file-upload {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 8px;
  }

  .file-input {
    display: none;
  }

  .file-label {
    padding: 0.5rem 1rem;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #e9e9e9;
    }
  }

  .file-name {
    color: #666;
    font-size: 0.9rem;
  }

  .error-text {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .form-load {
    display: flex;
    justify-content: space-between;
  }
  .input-label,
  .file-name {
    font-family: ${(props) => props.theme.fontFamily.roboto};
  }
`;
