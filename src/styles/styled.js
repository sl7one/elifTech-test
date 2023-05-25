import { styled } from 'styled-components';

export const ContainerBox = styled.div`
  padding: 0 30px;
  overflow-x: hidden;
`;

export const HeaderBox = styled.div`
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  ul {
    display: flex;
    gap: 30px;

    li {
      a {
        padding: 30px 0;

        &.active {
          color: red;
          position: relative;

          &::after {
            content: '';
            display: block;
            width: 100%;
            background-color: red;
            height: 2px;
            position: absolute;
            bottom: -2px;
            left: 0;
          }
        }
      }
    }
  }
`;

export const ShopBox = styled.div`
  display: flex;
  padding: 30px 0;
`;

export const HistoryBox = styled.div`
  ul[attr='restaurants'] {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;

    li {
      outline: 1px solid rgb(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 10px;

      ul[attr='dishes'] {
        margin-top: 20px;
        display: flex;
        gap: 10px;

        li {
          display: flex;
          gap: 10px;

          img {
            width: 50%;
            border-radius: 10px;
          }
          div {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 10px;

            p[attr='title'] {
              font-weight: 700;
            }
            span {
              color: red;
              font-weight: 700;
            }
          }
        }
      }

      p[attr='title'] {
        margin-top: 20px;
        font-weight: 700;

        span {
          color: red;
        }
      }
    }
  }
`;

export const ErrorPageBox = styled.div`
  width: 100%;
  height: 470px;
  background-color: red;
  background-image: url('https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg');
`;

export const LeftBox = styled.div`
  flex: 2;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      a {
        padding: 10px;
        transition: opacity 350ms ease-in;

        &.active {
          border-radius: 7px;
          outline: 1px solid red;
        }
      }
    }
  }
`;

export const RightBox = styled.div`
  flex: 6;
`;

export const ProductBox = styled.div`
  ul {
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow-y: scroll;

    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2);

    &::-webkit-scrollbar {
      width: 8px; /* ширина всей полосы прокрутки */
    }
    &::-webkit-scrollbar-track {
      background-color: transparent; /* цвет зоны отслеживания */
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2); /* цвет бегунка */
      border-radius: 5px; /* округлось бегунка */
    }

    li {
      flex: 1 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      overflow-x: hidden;

      img {
        border-radius: 10px;

        transition: transform 350ms ease-in;
        &:hover {
          transform: scale(1.05);
        }
      }

      p {
        font-weight: 700;
        margin-top: 20px;
      }

      button {
        margin-top: 20px;
        margin-left: auto;
        padding: 10px;
        border-radius: 10px;
        color: white;
        background-color: red;
        transition: all 350ms ease-in;
      }

      button[added='true'] {
        background-color: green;
      }
    }
  }
`;

export const ShoppingCartBox = styled.div`
  padding: 30px 0;

  form {
    display: flex;
    gap: 30px;

    div[part='left'] {
      flex: 1;

      div {
        display: flex;
        flex-direction: column;

        label {
          margin-top: 20px;
        }

        input {
          outline: 1px solid gray;
          border-radius: 5px;
          padding: 5px 10px;
          margin-top: 10px;
        }
      }
      div:first-of-type {
        label {
          margin-top: 0;
        }
      }
    }

    div[part='right'] {
      flex: 1;

      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 500px;
        overflow-y: scroll;

        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.2);

        &::-webkit-scrollbar {
          width: 8px; /* ширина всей полосы прокрутки */
        }
        &::-webkit-scrollbar-track {
          background-color: transparent; /* цвет зоны отслеживания */
        }
        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2); /* цвет бегунка */
          border-radius: 5px; /* округлось бегунка */
        }

        li {
          display: flex;
          gap: 15px;
          position: relative;
          padding-left: 10px;

          img {
            width: 50%;
            border-radius: 10px;

            transition: transform 350ms ease-in;

            &:hover {
              transform: scale(1.05);
            }
          }

          div {
            width: 50%;
            padding-right: 15px;
            p {
              margin-top: 10px;
              width: 80%;
              span {
                font-weight: 700;
              }
            }

            input {
              text-align: center;
              margin-top: 10px;
              box-sizing: border-box;
              width: 100%;
              padding: 5px 10px;
              outline: 1px solid gray;
              border-radius: 5px;
            }
          }
          button[type='button'] {
            position: absolute;
            top: 2%;
            right: 2%;
            padding: 5px 10px;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: background-color 350ms ease-in;

            &:hover {
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
        }
      }

      p[title='total'] {
        text-align: center;
        margin-top: 20px;
        font-weight: 700;
        text-transform: uppercase;
      }

      button {
        margin: 0 auto;
        margin-top: 10px;
        padding: 10px;
        border-radius: 10px;
        outline: 1px solid red;

        transition: background-color 350ms ease-in;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }

      div[attr='message'] {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
