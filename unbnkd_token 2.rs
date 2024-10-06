use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};

declare_id!("YourProgramID"); // Replace with your Solana program ID

#[program]
pub mod unbknd_token {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, initial_supply: u64) -> Result<()> {
        let mint = &mut ctx.accounts.mint;
        mint.decimals = 6; // Set token decimals
        mint.supply = initial_supply; // Initial supply
        Ok(())
    }

    pub fn mint_tokens(ctx: Context<MintTokens>, amount: u64) -> Result<()> {
        let mint = &mut ctx.accounts.mint;
        let user_account = &mut ctx.accounts.user_account;

        // Mint tokens to the user's account
        token::mint_to(ctx.accounts.into(), amount)?;
        Ok(())
    }

    pub fn transfer_tokens(ctx: Context<TransferTokens>, amount: u64) -> Result<()> {
        let from_account = &mut ctx.accounts.from;
        let to_account = &mut ctx.accounts.to;

        // Transfer tokens from one account to another
        token::transfer(ctx.accounts.into(), amount)?;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init)]
    pub mint: ProgramAccount<'info, Mint>,
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct MintTokens<'info> {
    pub mint: ProgramAccount<'info, Mint>,
    #[account(mut)]
    pub user_account: Account<'info, TokenAccount>,
    pub signer: Signer<'info>,
}

#[derive(Accounts)]
pub struct TransferTokens<'info> {
    #[account(mut)]
    pub from: Account<'info, TokenAccount>,
    #[account(mut)]
    pub to: Account<'info, TokenAccount>,
    pub authority: Signer<'info>,
}